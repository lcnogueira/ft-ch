# Closest Boutiques

![ci](https://github.com/lcnogueira/ft-ch/workflows/ci/badge.svg)

## What's in This Document
- [The Challenge](#computer-the-challenge)
- [Get Up and Running](#rocket-get-up-and-running)
  - [Additional commands](#additional-commands)
- [Running the Tests](#test_tube-running-the-tests)
- [To Do List](#to-do-list)
- [Additional Comments](#additional-comments)

## :computer: The Challenge
You can see the challenge description [here](https://github.com/Trouva/product-technical-tests/blob/master/challenges/Engineer.front_end.lvl1.md).

## :rocket: Get Up and Running
You can run this project on your local environment by following the simple steps below:

1. **Clone the project and install the dependencies.**
    ```bash
    git clone git@github.com:lcnogueira/ft-ch.git
    cd ft-ch/
    yarn install
    ```

2. **Copy the `.env-sample` file to `.env.local` and update the values.**

**P.S.: if you don't have a `NEXT_PUBLIC_MAPBOX_API_KEY`, a leaflet default map will be rendered (rather than a Mapbox one)**

3. **Run the project in `develop` mode.**
    ```bash
    yarn dev
    ```

4. **Visit the website!**
The site is now running on `http://localhost:3000`.

### Additional commands
You can find additionals commands inside the [package.json](package.json) file:

- `build`: creates the production build version.
- `start`: starts a simple server by running the build version (make sure you have created the build version before running this script).
- `lint`: runs the linter against components and pages.
- `storybook`: runs storybook on develop mode.
- `build-storybook`: creates the build version of storybook.

## :test_tube: Running the Tests
You can use one of the following scripts to run the tests:
- `test`: runs the tests for all components and pages;
- `test:watch`: runs tests in watch mode.

## Todo List

## Additional Comments

### NextJs Boilerplate

This project was bootstrapped by using my own [nextjs-boilerplate](https://github.com/lcnogueira/nextjs-boilerplate)


