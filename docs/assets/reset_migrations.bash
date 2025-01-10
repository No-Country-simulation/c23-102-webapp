rm -R -f ./migrations &&
pipenv run init &&
psql -U postgres -c "DROP DATABASE IF EXISTS deliveryfood";
psql -U postgres -c "CREATE DATABASE deliveryfood";
psql -U postgres -c "CREATE EXTENSION unaccent" -d deliveryfood;
pipenv run migrate &&
pipenv run upgrade
