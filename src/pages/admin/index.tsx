import { Seo } from "@/ui/components/SEO/seo";
import { Layout } from "@/ui/components/layout/layout";
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import { Box } from "@/ui/design-system/box/box";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase-config";
import { ADMIN_EMAILS } from "@/config/admin-config";

export default function AdminPanel() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const isAdmin = !!user && ADMIN_EMAILS.includes(user.email ?? "");
      setAuthorized(isAdmin);
      setLoading(false);
      if (!isAdmin) {
        router.replace("/");
      }
    });
    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return (
      <Layout>
        <Container className="py-10">
          <Typography variant="h1">Chargement...</Typography>
        </Container>
      </Layout>
    );
  }

  if (!authorized) {
    return null;
  }

  const features = [
    {
      title: "Gestion des comptes",
      description: "Créer, modifier et supprimer les utilisateurs.",
    },
    {
      title: "Gestion des cours",
      description: "Ajouter ou mettre à jour les programmes de cours.",
    },
    {
      title: "Documents",
      description: "Envoyer ou retirer des documents pédagogiques.",
    },
    {
      title: "Suivi des élèves",
      description: "Consulter la progression des apprenants.",
    },
  ];

  return (
    <>
      <Seo title="Panneau d'administration" description="Gestion du contenu" />
      <Layout>
        <Container className="py-10 space-y-4">
          <Typography variant="h1">Panneau d&apos;administration</Typography>
          <Typography variant="body-base">
            Gérez le contenu et les utilisateurs du site.
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <Box key={feature.title}>
                <Typography variant="h3" component="h2" className="mb-2">
                  {feature.title}
                </Typography>
                <Typography variant="body-base" theme="gray">
                  {feature.description}
                </Typography>
              </Box>
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
}
