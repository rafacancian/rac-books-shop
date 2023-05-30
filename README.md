# RAC Books Shop 

Project created in order to study and improve my frontend knowledge and integrate services
The project was separated into two modules. Frontend and Backend
Frontend developed with React and Mui components and for the integration with the external service, the frontend service uses Axios, GraphQL and Apollo client. I also use Context API to global state management

On the Backend part was used nodejs for the ease and speed of creating endpoints and json files as data base store. The focus of the backend part was estudy a integrate with react and graphql, so the database and security were not relevante at the moment



## Run project

### Frontend
- npm install
- npm start
- http://localhost:3000

### Backend
- npm install
- npm run start:api (para correr a api em nodejs)
- npm run start:dev (para correr o GraphQL)
- http://localhost:8000
- http://localhost:9000/graphql


## Git Configuration 

### 1 Create repositories
- git@github.com:rafacancian/rac-books-shop.git 
- git@github.com:rafacancian/rac-books-shop-frontend.git
- git@github.com:rafacancian/rac-books-shop-backend.git

### 2 Link projetcs
- git remote add frontend git@github.com:rafacancian/rac-books-shop-frontend.git
- git remote add backend git@github.com:rafacancian/rac-books-shop-backend.git
> set url (optional)
> - git remote set-url rac-books-shop-frontend git@github.com:rafacancian/rac-books-shop-frontend.git
> - git remote set-url rac-books-shop-backend git@github.com:rafacancian/rac-books-shop-backend.git

### 3 Add repositories to mainly project
- git subtree add --prefix=rac-books-shop-frontend/ rac-books-shop-frontend main 
- git subtree add --prefix=rac-books-shop-backend/ rac-books-shop-backend main

