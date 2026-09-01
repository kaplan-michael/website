## Michael Kaplan's website

Personal landing page built with Astro, Tailwind CSS, and Lucide icons, hosted
on Kubernetes.

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.

Build the deployment container with `make build`. Set `VERSION` to override the
default `dev` image tag, for example `make build VERSION=1.1.0`.

## Delivery flow

Pushes to `master` that change the site or container build inputs trigger the
GitHub Actions workflow. It builds and pushes both `latest` and an immutable
`sha-<commit>` tag to `quay.io/kaplan-infra/kaplan-web`. After the push succeeds,
the workflow commits that immutable tag to `deploy/kustomization.yaml`.

Argo CD watches the `deploy` path on `master`, notices the tag commit, and syncs
the exact image produced by CI. The application can be bootstrapped with:

```sh
kubectl apply -f argo-app.yaml
```

The GitHub Actions workflow requires `REGISTRY_USER` and `REGISTRY_PASSWORD`
secrets and permission to push its deployment-tag commit to `master`.
