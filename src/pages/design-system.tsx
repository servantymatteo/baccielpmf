//COMPONENTS
import { Seo } from "@/ui/components/SEO/seo";
import { Container } from "@/ui/components/container/container";
import { Navigation } from "@/ui/components/navigation/navigation";

// DESIGN SYSTEM
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";

// ICO
import { RiUser6Fill } from "react-icons/ri";

export default function DesignSystem() {
  return (
    <>
      <Seo title="Design System" description="DESCRIPTION" />
      <Navigation />

      <Container className="py-10 space-y-10">
        {/* Typography */}
        <div className="space-y-2">
          <Typography variant="display" weight="medium">
            Design System
          </Typography>
          <Typography variant="caption2" weight="medium">
            Typography
          </Typography>
          <div className="flex flex-col gap-2 p-5 border-gray-400 divide-y-3 divide-y-2 divide-gray-400 rounded">
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Display
              </Typography>
              <Typography variant="display">Nothing is impossible</Typography>
            </div>
            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                H1
              </Typography>
              <Typography variant="h1">
                Nothing is impossible, The world itself says, Im possivle
              </Typography>
            </div>
            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                H2
              </Typography>
              <Typography variant="h2">
                Your time is limited, so dont waswt it living someon elses life
              </Typography>
            </div>
            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                H3
              </Typography>
              <Typography variant="h3">
                Daily report: Removing Checks de Power of the internet Titans
              </Typography>
            </div>
            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                H4
              </Typography>
              <Typography variant="h4">
                Daily report: Removing Checks de Power of the internet Titans
              </Typography>
            </div>
            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                H5
              </Typography>
              <Typography variant="h5">
                Daily report: Removing Checks de Power of the internet Titans
              </Typography>
            </div>
            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Lead
              </Typography>
              <Typography variant="lead">
                Daily report: Removing Checks de Power of the internet Titans
              </Typography>
            </div>
            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Body lg
              </Typography>
              <Typography variant="body-lg">
                Daily report: Removing Checks de Power of the internet Titans
              </Typography>
            </div>
            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Body Base
              </Typography>
              <Typography variant="body-base">
                Daily report: Removing Checks de Power of the internet Titans
              </Typography>
            </div>
            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Body Sm
              </Typography>
              <Typography variant="body-sm">
                Daily report: Removing Checks de Power of the internet Titans
              </Typography>
            </div>
            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Caption 1
              </Typography>
              <Typography variant="caption1" weight="regular">
                Regular
              </Typography>
              <Typography variant="caption1" weight="medium">
                Medium
              </Typography>
            </div>
            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Caption 2
              </Typography>
              <Typography variant="caption2" weight="regular">
                Regular
              </Typography>
              <Typography variant="caption2" weight="medium">
                Medium
              </Typography>
            </div>
            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Caption 3
              </Typography>
              <Typography variant="caption3" weight="regular">
                Regular
              </Typography>
              <Typography variant="caption3" weight="medium">
                Medium
              </Typography>
            </div>
            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Caption 4
              </Typography>
              <Typography variant="caption4" weight="regular">
                Regular
              </Typography>
              <Typography variant="caption4" weight="medium">
                Medium
              </Typography>
            </div>
          </div>
        </div>
        {/* Spinner */}
        <div className="flex items-start gap-7">
          <div className="space-y-2">
            <Typography variant="caption2" weight="medium">
              Spinners
            </Typography>
            <div className="flex items-center gap-2 p-5 border-gray-400 rounded">
              <Spinner size="small" />
              <Spinner />
              <Spinner size="large" />
            </div>
          </div>
          {/* Avatar */}

          <div className="space-y-2">
            <Typography variant="caption2" weight="medium">
              Avatar
            </Typography>
            <div className="flex items-center gap-2 p-5 border-gray-400 rounded">
              <Avatar
                src="\asset\image\téléchargé.jpg"
                alt="Avatar de Daniel Lincoln"
                size="small"
              />
              <Avatar
                src="\asset\image\téléchargé.jpg"
                alt="Avatar de Daniel Lincoln"
              />
              <Avatar
                src="\asset\image\téléchargé.jpg"
                alt="Avatar de Daniel Lincoln"
                size="large"
              />
            </div>
          </div>
          {/* Logo */}

          <div className="space-y-2">
            <Typography variant="caption2" weight="medium">
              Logo
            </Typography>
            <div className="flex items-center gap-2 p-5 border-gray-400 rounded">
              <Logo size="very-small" />
              <Logo size="small" />
              <Logo size="medium" />
              <Logo size="large" />
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="space-y-2">
          <Typography variant="caption2" weight="medium">
            Typography
          </Typography>
          <div className="flex flex-col gap-2 p-5 border-gray-400 divide-y-3 divide-y-2 divide-gray-400 rounded">
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Small
              </Typography>
              <div className="flex items-start gap-2">
                <Button isLoading variant="accent" size="small">
                  Accent
                </Button>
                <Button
                  isLoading
                  variant="accent"
                  icon={{ icon: RiUser6Fill }}
                  size="small"
                >
                  accent
                </Button>
                <Button isLoading variant="secondary" size="small">
                  Accent
                </Button>
                <Button
                  isLoading
                  variant="ico"
                  iconTheme="accent"
                  size="small"
                  icon={{ icon: RiUser6Fill }}
                />
                <Button
                  isLoading
                  variant="ico"
                  iconTheme="secondary"
                  size="small"
                  icon={{ icon: RiUser6Fill }}
                />
                <Button
                  isLoading
                  variant="ico"
                  iconTheme="gray"
                  size="small"
                  icon={{ icon: RiUser6Fill }}
                />
                <Button isLoading variant="outlines" size="small">
                  Outlines
                </Button>
                <Button isLoading variant="disabled" disabled size="small">
                  Outlines
                </Button>
              </div>
              <div className="flex items-start gap-2">
                <Button variant="accent" size="small">
                  Accent
                </Button>
                <Button
                  variant="accent"
                  icon={{ icon: RiUser6Fill }}
                  size="small"
                >
                  accent
                </Button>
                <Button variant="secondary" size="small">
                  Accent
                </Button>
                <Button
                  variant="ico"
                  iconTheme="accent"
                  size="small"
                  icon={{ icon: RiUser6Fill }}
                />
                <Button
                  variant="ico"
                  iconTheme="secondary"
                  size="small"
                  icon={{ icon: RiUser6Fill }}
                />
                <Button
                  variant="ico"
                  iconTheme="gray"
                  size="small"
                  icon={{ icon: RiUser6Fill }}
                />
                <Button variant="outlines" size="small">
                  Outlines
                </Button>
                <Button variant="disabled" disabled size="small">
                  Outlines
                </Button>
              </div>
            </div>
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Medium
              </Typography>
              <div className="flex items-start gap-2">
                <Button isLoading variant="accent" size="medium">
                  Accent
                </Button>
                <Button
                  isLoading
                  variant="accent"
                  icon={{ icon: RiUser6Fill }}
                  size="medium"
                >
                  accent
                </Button>
                <Button isLoading variant="secondary" size="medium">
                  Accent
                </Button>
                <Button
                  isLoading
                  variant="ico"
                  iconTheme="accent"
                  size="medium"
                  icon={{ icon: RiUser6Fill }}
                />
                <Button
                  isLoading
                  variant="ico"
                  iconTheme="secondary"
                  size="medium"
                  icon={{ icon: RiUser6Fill }}
                />
                <Button
                  isLoading
                  variant="ico"
                  iconTheme="gray"
                  size="medium"
                  icon={{ icon: RiUser6Fill }}
                />
                <Button isLoading variant="outlines" size="medium">
                  Outlines
                </Button>
                <Button isLoading variant="disabled" disabled size="medium">
                  Outlines
                </Button>
              </div>
              <div className="flex items-start gap-2">
                <Button variant="accent" size="medium">
                  Accent
                </Button>
                <Button
                  variant="accent"
                  icon={{ icon: RiUser6Fill }}
                  size="medium"
                >
                  accent
                </Button>
                <Button variant="secondary" size="medium">
                  Accent
                </Button>
                <Button
                  variant="ico"
                  iconTheme="accent"
                  size="medium"
                  icon={{ icon: RiUser6Fill }}
                />
                <Button
                  variant="ico"
                  iconTheme="secondary"
                  size="medium"
                  icon={{ icon: RiUser6Fill }}
                />
                <Button
                  variant="ico"
                  iconTheme="gray"
                  size="medium"
                  icon={{ icon: RiUser6Fill }}
                />
                <Button variant="outlines" size="medium">
                  Outlines
                </Button>
                <Button variant="disabled" disabled size="medium">
                  Outlines
                </Button>
              </div>
            </div>
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Large
              </Typography>
              <div className="flex items-start gap-2">
                <Button isLoading variant="accent" size="large">
                  Accent
                </Button>
                <Button
                  isLoading
                  variant="accent"
                  icon={{ icon: RiUser6Fill }}
                  size="large"
                >
                  accent
                </Button>
                <Button isLoading variant="secondary" size="large">
                  Accent
                </Button>
                <Button
                  isLoading
                  variant="ico"
                  iconTheme="accent"
                  size="large"
                  icon={{ icon: RiUser6Fill }}
                />
                <Button
                  isLoading
                  variant="ico"
                  iconTheme="secondary"
                  size="large"
                  icon={{ icon: RiUser6Fill }}
                />
                <Button
                  isLoading
                  variant="ico"
                  iconTheme="gray"
                  size="large"
                  icon={{ icon: RiUser6Fill }}
                />
                <Button isLoading variant="outlines" size="large">
                  Outlines
                </Button>
                <Button isLoading variant="disabled" disabled size="large">
                  Outlines
                </Button>
              </div>
              <div className="flex items-start gap-2">
                <Button variant="accent" size="large">
                  Accent
                </Button>
                <Button
                  variant="accent"
                  icon={{ icon: RiUser6Fill }}
                  size="large"
                >
                  accent
                </Button>
                <Button variant="secondary" size="large">
                  Accent
                </Button>
                <Button
                  variant="ico"
                  iconTheme="accent"
                  size="large"
                  icon={{ icon: RiUser6Fill }}
                />
                <Button
                  variant="ico"
                  iconTheme="secondary"
                  size="large"
                  icon={{ icon: RiUser6Fill }}
                />
                <Button
                  variant="ico"
                  iconTheme="gray"
                  size="large"
                  icon={{ icon: RiUser6Fill }}
                />
                <Button variant="outlines" size="large">
                  Outlines
                </Button>
                <Button variant="disabled" disabled size="large">
                  Outlines
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
