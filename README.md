# RiverHacks 2025 - SafeStep

## Business Context

Austin is a rapidly growing city with dense traffic and increasingly complex intersections. For pedestrians, knowing when it is safe to cross can be unclear and stressful. SafeStep is a mobile app designed to notify users when it is safe to cross signalized intersections, helping reduce uncertainty, improve timing, and make city navigation safer and more accessible.

## User Story

**_As a_** pedestrian

**_I want_** to be notified when it is safe to cross an intersection

**_So That_** I can cross streets confidently and avoid oncoming traffic.

## Challenge Area

**Inclusive Accessibility**: ​Ensure safety information and services reach all residents, including those with disabilities

**Smart Infrastructure:** Enhance the safety and accessibility of Austin's public spaces and transportation systems

## Technologies

- React Native
- Typescript

## Minimum Viable Product (MVP)

- Get user geolocation
- Get nearest intersection(s)
- Get Current intersection crossing status
  - Alert crossing status
    - Stop
    - Walk
    - Warning
- Notify Intersection to signal to cross

## System Design

Functional requirements (MVP)

- Users should be able to set their current intersection by searching or choosing from a nearby list.
- Users can view the current crossing status for the selected intersection (STOP, WALK, WARNING, or UNKNOWN).
- Users will receive an in-app alert when the crossing status changes.
- Users will see the crossing status refresh automatically while they are actively using the app at an intersection.

Functional requirements (Next)

- Users should be able to detect intersections automatically when they arrive near one (geofence).
- Users can use destination mode to follow a route and automatically advance to the next intersection.
- Users should be able to save favorite intersections and quickly return to them.
- Users will see a safe fallback state when signal data is unavailable (e.g., UNKNOWN + “Use caution”).

Non-functional requirements

- Latency: status changes should reach user quickly (goal: < 1–2s once received)
- Reliability: tolerate dropped network; retry with backoff
- Battery: avoid high-frequency GPS + high-frequency polling in background
- Safety UX: never overclaim; always show “Use caution / obey signals”
- Privacy: minimize storage of precise location; avoid retaining history unless user opts in

## Group

- Alex
- Josh
- Luis
- Vanessa
