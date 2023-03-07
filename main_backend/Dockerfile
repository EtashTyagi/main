FROM openjdk:11
COPY ./ /main
WORKDIR /main
RUN ./mvnw package -Pprod
ARG JAR_FILE=./target/*.jar
RUN cp ${JAR_FILE} /app.jar
