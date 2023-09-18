---
index: 1
title: Covid Simulation
description: Simulate the course of a COVID-19 contagion wave with many parameters and settings.
technologies:
  - java
  - greenfoot
links:
  - name: GitHub Repository
    url: https://github.com/bennetrr/covid-simulation
  - name: Download
    url: https://github.com/bennetrr/covid-simulation/releases/latest
  - name: Documentation
    url: https://github.com/bennetrr/covid-simulation/blob/main/README.md
---

This project is a very simplified simulation of a COVID-19 infection wave, with many parameters that can be adjusted.
The project was developed in computer science class, so large parts of the documentation are written in German. 

At the beginning of the simulation, people are spawned with a random age, including one or more infected people.
When you start the simulation, the people run around the world.
In the meantime, the infected persons infect healthy persons, who can then infect the others.
After a certain time, the infected persons become either immune or ill.
The age of the person affects most of the decisions.
For example, older people get sick more often than younger people and are also more infectious.
When quarantine is activated, sick people cannot move and infect anyone, but infected people can.
After a certain time of being sick, people can either become immune or healthy or die.
The simulation ends when there are no more infected or sick people.

The persons' status is shown by the different colors of their bodies.
There are also counters for all groups and status changes in the console.
