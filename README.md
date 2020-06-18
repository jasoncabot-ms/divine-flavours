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

### Add Dynamics API Permissions

* App Registrations -> 'Divine Flavours' -> API permissions -> Add a permission
* Choose -> Microsoft APIs -> Dynamics CRM -> user_impersonation -> Add permissions

### Create an Azure Static Web App Resource

https://docs.microsoft.com/en-us/azure/static-web-apps/getting-started

### Update Azure AD Application

* Authentication -> Web -> Redirect URIs -> Enter the URI of your web app
