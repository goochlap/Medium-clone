# [TEST RAILS ROOM IN TOUCH](https://test-rails-room-in-touch.herokuapp.com/)

Create a medium clone app

## Stack

- [RubyOnRails](https://rubyonrails.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Heroku](https://www.heroku.com/)

## CLI

- `yarn install`
- `rails db:create db:migrate`
- `bundle install`

## Heroku

- push on heroku : `git push heroku master`
- open in your browser : `heroku open`
- show the app logs and keep listening : `heroku logs --tail`
- run pending migrations in prod : `heroku run rails db:migrate`
- run seed in prod : `heroku run rails db:seed`
- run the production console : `heroku run rails c`