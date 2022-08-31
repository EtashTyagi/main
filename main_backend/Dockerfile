FROM openjdk:11
COPY . /src
WORKDIR /src
RUN ./mvnw package
ARG JAR_FILE=/target/*.jar
RUN cp ${JAR_FILE} /webapp.jar

