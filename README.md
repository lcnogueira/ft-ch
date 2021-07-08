# Closest Boutiques

![ci](https://github.com/lcnogueira/ft-ch/workflows/ci/badge.svg)

## What's in This Document
- [The Challenge](#computer-the-challenge)
- [Get Up and Running](#get-up-and-running)
  - [Additional commands](#additional-commands)
- [Running the Tests](#running-the-tests)
- [Additional Comments](#additional-comments)
- [Additional Features](#additional-features)
- [Future Improvements](#future-improvements)
- [NextJs Boilerplate](#nextjs-boilerplate)

## :computer: The Challenge
You can see the challenge description [here](https://github.com/Trouva/product-technical-tests/blob/master/challenges/Engineer.front_end.lvl1.md).

## Get Up and Running
You can run this project on your local environment by following the simple steps below:

1. **Clone the project and install the dependencies.**
    ```bash
    git clone git@github.com:lcnogueira/ft-ch.git
    cd ft-ch/
    yarn install
    ```

2. **Copy the `.env-sample` file to `.env.local` and update the values.**
  P.S.: if you don't have a `NEXT_PUBLIC_MAPBOX_API_KEY`, a leaflet default map will be rendered (rather than a Mapbox one)

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

## Running the Tests
You can use one of the following scripts to run the tests:
- `test`: runs the tests for all components and pages.
- `test:watch`: runs tests in watch mode.
## Additional Comments
- I've filtered and sorted the data on my own API route since the provided challenge route API from Trouva doesn't seem to provide an option for that.
- I decided to use the [leaflet map](https://github.com/Leaflet) (open source) instead of the google maps one to avoid having to create an api key (and adding a credit card).

## Additional Features
- [X] Added a simple boutique details page that is displayed when the user clicks on a boutique marker. Those pages are statically rendered with an incremental approach (I can explain why I think this is a good idea on the technical interview)
- [x] Added some simple unit tests.

## Future Improvements
- [ ] Tracking the location of the user and fetching the boutiques list every time his location changes above a threshold value (e.g. 1 km).
- [ ] Creating a fallback option in case the user does not provide latitude and longitude values. Right now, the app only displays the boutiques if the user provides those values.
- [ ] Displaying the user position marker.
- [ ] Creating the components stories (we have storybook set up already).
- [ ] Creating additional tests.

### NextJs Boilerplate

This project was bootstrapped by using my own [nextjs-boilerplate](https://github.com/lcnogueira/nextjs-boilerplate)


