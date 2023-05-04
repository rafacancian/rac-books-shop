# RAC Books Shop 

# 1 Create repositories
- git@github.com:rafacancian/rac-books-shop.git 
- git@github.com:rafacancian/rac-books-shop-frontend.git
- git@github.com:rafacancian/rac-books-shop-backend.git

# 2 Link projetcs
- git remote add frontend git@github.com:rafacancian/rac-books-shop-frontend.git
- git remote add backend git@github.com:rafacancian/rac-books-shop-backend.git
> set url (optional)
> - git remote set-url rac-books-shop-frontend git@github.com:rafacancian/rac-books-shop-frontend.git
> - git remote set-url rac-books-shop-backend git@github.com:rafacancian/rac-books-shop-backend.git

# 3 Add repositories to mainly project
- git subtree add --prefix=rac-books-shop-frontend/ rac-books-shop-frontend main 
- git subtree add --prefix=rac-books-shop-backend/ rac-books-shop-backend main
