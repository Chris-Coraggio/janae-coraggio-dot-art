import React, { useState } from "react";
import { Card, Stack, Flex, Text, Button, Badge, Spinner } from "@sanity/ui";
import { RocketIcon } from "@sanity/icons/Rocket";
import { CheckmarkCircleIcon } from "@sanity/icons/CheckmarkCircle";
import { ErrorOutlineIcon } from "@sanity/icons/ErrorOutline";

const NETLIFY_HOOK = import.meta.env.SANITY_STUDIO_NETLIFY_HOOK || "https://api.netlify.com/build_hooks/6ad8086ffceb36e91053e643";

export function DeployView() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [lastDeploy, setLastDeploy] = useState<string | null>(() => {
    return localStorage.getItem("sanity_last_netlify_deploy");
  });

  async function handleDeploy() {
    setLoading(true);
    setStatus("idle");
    setMessage("");

    try {
      const res = await fetch(NETLIFY_HOOK, {
        method: "POST",
      });

      if (res.ok) {
        const timestamp = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          month: "short",
          day: "numeric",
        });
        setStatus("success");
        setMessage("Build triggered successfully! Netlify is now building and deploying your changes.");
        setLastDeploy(timestamp);
        localStorage.setItem("sanity_last_netlify_deploy", timestamp);
      } else {
        setStatus("error");
        setMessage(`Netlify responded with status code ${res.status}. Please check your build hook.`);
      }
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message || "Network error triggering deploy.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card padding={[4, 5, 6]} tone="transparent" height="fill">
      <Flex justify="center" align="center" style={{ minHeight: "60vh" }}>
        <Card padding={[4, 5]} radius={3} shadow={2} tone="default" style={{ maxWidth: 580, width: "100%", margin: "0 auto" }}>
          <Stack space={4}>
            <Flex align="center" gap={3}>
              <Text size={4}>🚀</Text>
              <Stack space={2}>
                <Text size={3} weight="bold">
                  Deploy to Live Site
                </Text>
                <Text size={1} muted>
                  Push your Sanity edits live to your website on Netlify.
                </Text>
              </Stack>
            </Flex>

            <Card padding={3} radius={2} tone="caution">
              <Text size={1}>
                💡 <strong>Tip:</strong> You can edit and publish as many books, images, and pages as you like. When you are finished with your
                editing session, click below to trigger a single Netlify build and conserve your free monthly build minutes!
              </Text>
            </Card>

            {status === "success" && (
              <Card padding={3} radius={2} tone="positive">
                <Flex align="center" gap={2}>
                  <CheckmarkCircleIcon style={{ fontSize: 20 }} />
                  <Stack space={2}>
                    <Text size={1} weight="semibold">
                      {message}
                    </Text>
                    <Text size={1} muted>
                      Your live site will update in approximately 30–60 seconds.
                    </Text>
                  </Stack>
                </Flex>
              </Card>
            )}

            {status === "error" && (
              <Card padding={3} radius={2} tone="critical">
                <Flex align="center" gap={2}>
                  <ErrorOutlineIcon style={{ fontSize: 20 }} />
                  <Text size={1}>{message}</Text>
                </Flex>
              </Card>
            )}

            <Button
              icon={loading ? undefined : RocketIcon}
              text={loading ? "Triggering Netlify Build..." : "Deploy Changes to Live Site"}
              tone="primary"
              fontSize={2}
              padding={4}
              disabled={loading}
              onClick={handleDeploy}
              style={{ cursor: loading ? "wait" : "pointer" }}
            />

            {lastDeploy && (
              <Flex justify="space-between" align="center">
                <Text size={1} muted>
                  Last deploy triggered from this browser:
                </Text>
                <Badge tone="primary">{lastDeploy}</Badge>
              </Flex>
            )}
          </Stack>
        </Card>
      </Flex>
    </Card>
  );
}
