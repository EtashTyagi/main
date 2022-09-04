FROM node:16.17.0-alpine as frontend_builder
COPY ./main_frontend /app
WORKDIR /app
RUN npm install --force
RUN npm run build

FROM openjdk:11
COPY ./main_backend /main
WORKDIR /main
COPY --from=frontend_builder /app/build ./src/main/resources/static/
RUN ./mvnw package -Pprod
ARG JAR_FILE=./target/*.jar
RUN cp ${JAR_FILE} /app.jar
