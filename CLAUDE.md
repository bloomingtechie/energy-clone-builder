# Repo notes

## Git identity — IMPORTANT
This repo's prior human commits were authored as `bloomingtechie <borguuh@gmail.com>` (the
account's other/original GitHub login), not the `abdrahmanadewale@gmail.com` identity used
elsewhere in this workspace. Local git config here has been set to match:

```
git config user.name  # bloomingtechie
git config user.email # borguuh@gmail.com
```

Do not change this back. If a `git push` to `origin` (https://github.com/bloomingtechie/energy-clone-builder.git)
fails with an authentication/permission error, it's because the credential helper is signed in
as the wrong GitHub account — stop and tell the user to log into GitHub as `bloomingtechie`
(they said they'll do this themselves if needed) rather than trying to work around it.

## Renamed
This folder was renamed from `energy-clone-builder` to `cleanenergyfund` at the user's request
(2026-09-09). The git remote still points at the old repo name
(`bloomingtechie/energy-clone-builder`) — GitHub was not renamed since this environment has no
`gh` CLI / API token to do it. If the user wants the actual GitHub repo renamed to match, they'll
need to do that themselves (repo Settings → rename) or grant a way to do it via API.

## Stack / conversion
Originally a Vite + React + shadcn/ui site (`vite_react_shadcn_ts`), built via an AI page-builder
(commits from `gpt-engineer-app[bot]`). Per the user's request this is being converted to Next.js
to match the rest of the FundCo group's sites (App Router, Tailwind, GSAP animations, full SEO
metadata + OG image, deploy-safe Resend contact form) — same pattern used for fundco/, agronomie/,
electrifymicrogrid/, horizon/, e-mobilite/, regenloop/, onecap/ in the parent directory.

## Partners
This is FundCo's Clean Energy Local Currency Fund (CeF) — it does not list itself as its own
"partner". Per the user: DREEF (an InfraCredit-established facility — see InfraCredit relationship
noted below) should NOT be added here (CEF is one of the 3 sites explicitly excluded... actually
re-check: user excluded DREEF from FundCo/Horizon/OneCap only — CEF's own site was not explicitly
excluded or included for DREEF, decide contextually when doing the partners work). InfraCredit is
already a real, confirmed partner/collaborator of CeF (Clean Energy Funding Programme).
