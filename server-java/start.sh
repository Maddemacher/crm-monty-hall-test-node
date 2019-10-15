#!/bin/bash
mvn install
java -Dserver.port=3011 -jar target/monty-hall-0.0.1-SNAPSHOT.jar
