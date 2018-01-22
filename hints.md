ERROR in src/app/app.component.ts(27,28): error TS2304: Cannot find name '$'.
===================================================================

I got it working by installing @types/jquery from npm.



Deployment
===================================================================
generate dist:
`ng build --target=production --base-href /`

deploy prototype web:

`npm -i -g now`

1. go to dist folder `cd dist`
2. in terminal `now`
3. login
4. follow steps

5. go to https://zeit.co
6. login
7. view log and go to deployed link
