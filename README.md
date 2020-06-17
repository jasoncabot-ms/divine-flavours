# Divine Flavours

A sample static web app

## How to build from scratch

### Register an app in Azure AD

```
az ad app create --display-name="Divine Flavours" \
    --oauth2-allow-implicit-flow=true \
    --reply-urls="http://localhost:3000" \
    --available-to-other-tenants=true \
    --query "appId" -o tsv
```