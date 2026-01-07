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

## System Design

### Requirements

**Functional (MVP)**

- Users should be able to set their current intersection by searching or choosing from a nearby list.
- Users can view the current crossing status for the selected intersection (`STOP`, `WALK`, `WARNING`, or `UNKNOWN`).
- Users will receive an in-app alert when the crossing status changes.
- Users will see the crossing status refresh automatically while they are actively using the app at an intersection.

**Functional (Next)**

- Users should be able to detect intersections automatically when they arrive near one (geofence).
- Users can use destination mode to follow a route and automatically advance to the next intersection.
- Users should be able to save favorite intersections and quickly return to them.
- Users will see a safe fallback state when signal data is unavailable (e.g., UNKNOWN + “Use caution”).

**Non-functional**

- Latency: status changes should reach user quickly (goal: < 1–2s once received)
- Reliability: tolerate dropped network; retry with backoff
- Battery: avoid high-frequency GPS + high-frequency polling in background
- Safety UX: never overclaim; always show “Use caution / obey signals”
- Privacy: minimize storage of precise location; avoid retaining history unless user opts in

### Core entities

**Intersection**

- `id`
- `name` (e.g., “Congress Ave & 6th St”)
- `latitude`
- `longitude`
- `city`
- `isActive`
- `createdAt`

**CrossingSignalState**

- `intersectionId`
- `status` → `STOP | WALK | WARNING | UNKNOWN`
- `effectiveAt` (timestamp)
- `expiresAt` (optional)

**Device**

- `id`
- `userId` (nullable)
- `platform` (iOS / Android)
- `pushToken`
- `createdAt`

**Subscription**

- `id`
- `deviceId`
- `intersectionId`
- `isActive`
- `createdAt`

**DataSource**

- `id`
- `name` (e.g., “City of Austin Traffic Signals”)
- `type` (`CITY_FEED`)
- `format` (e.g., `SPaT`, `NTCIP`, `JSON`)
- `isActive`
- `lastHeartbeatAt`

**AgencyIntersectionMap**

- `dataSourceId`
- `agencyIntersectionId`
- `safeStepIntersectionId`

**RawSignalEvent**

- `id`
- `dataSourceId`
- `payload`
- `receivedAt`

**NormalizedSignalEvent**

- `intersectionId`
- `normalizedStatus` (`STOP | WALK | WARNING | UNKNOWN`)
- `effectiveAt`
- `sourceEventId`

### APIs

**Intersections**

- `GET /intersections/nearby`
- `GET /intersections/search`
- `GET /intersections/{intersectionId}/signal`

**Devices**

- `POST /devices/register`

**Subscriptions**

- `POST /subscriptions`
- `DELETE /subscriptions/{subscriptionId}`

**Internal – City Feed Ingestion**

- `POST /internal/feeds/{dataSourceId}/events`

**Realtime Updates**

- `GET /stream/intersections/{intersectionId}` _(realtime instead of polling)_

### Flow chart

## Group

- Alex
- Josh
- Luis
- Vanessa
