
# Movie Watch List
Movie Watch List is a web application created with React, which gives the users a convenient place to browse movie titles. 

The primary aim behind creating this application is to display a solid **CI/CD pipeline** which performs following functions:
> Code Build
> Code Lint and Prettier Checks
> Unit Tests Execution
> Publish image to Docker Hub
> Amazon S3 Deployment
> Amazon Cloudfront Distribution
> Slack Notification on success

**The app can be accessed from this [Website Link](https://d16ntono569i9g.cloudfront.net/).**

## About the application
This web application is created using **create-react-app** and uses `Redux` under the hood for application state management. The application is capable of notifying the creators of any error through `Sentry`, which sends an email along with a notification on **Slack**.

Application is deployed on `Amazon S3` and distributed across a CDN using `Amazon Cloudfront` network. 

## Pipeline
Source code of the application is maintained on **Github**. The repository is well connected to `CircleCI`, which runs it's various pipelines and takes care of all the steps mentioned earlier right from the moment some code is pushed to the repository.

Every branch has different meanings, like for the **DEV** (development) branch, the pipeline only runs code linting and testing rules and publishes a Slack notification. For **STAGE** branch, the pipeline also pushes an image to Docker Hub, and deploys the application on Amazon S3.

When it comes to **MASTER** branch, however, the pipeline goes one step forward and invalidates the Cloudfront cache so that new content can be served through the application right away.

I idea is to do any development on Feature branches, and merge the changes to Dev for local testing. Then, the changes can be merged to Staging environment for one final check before pushing to Production.

![https://i.imgur.com/VGAUenh.png](https://i.imgur.com/VGAUenh.png)

## Available Scripts

In the project directory, you can run:

### `yarn start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`
Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed! See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Local Docker Execution

Get the required image version from Docker Hub.
[Docker Repository Link](https://hub.docker.com/repository/docker/sumitgovilstudy/movie-watch-list)

The app is containerised by putting the React build packaged inside an **Nginx** server.
Sample commands for running a specific version locally are as follows:

```bash
docker pull sumitgovilstudy/movie-watch-list:stable-186

docker run -it -p 80:80 sumitgovilstudy/movie-watch-list:stable-186
```

# Thank You
