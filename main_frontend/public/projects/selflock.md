# SelfLock - Android Addiction Control

**Take back control of your digital life with intelligent app and website blocking.**

SelfLock is a powerful Android application designed to help you break free from digital addiction. Built with modern Android development practices, it provides comprehensive tools to monitor, limit, and control your app and website usage.

---

## Key Features

### App & Website Blocking
- **Smart App Blocking**: Set daily usage limits or schedule block periods for any installed app
- **Website Blocking**: Block distracting websites across Chrome, Firefox, Samsung Internet, and Edge browsers
- **Flexible Scheduling**: Create custom schedules with start/end times for automatic blocking
- **Password Protection**: Secure your rules with master password or individual rule passwords

### Usage Analytics
- **Detailed Statistics**: Track daily usage patterns across all apps and websites
- **Visual Insights**: Beautiful charts and graphs showing your digital habits
- **Historical Data**: Review usage trends over time to measure your progress

### Advanced Security
- **Master Password**: Optional app-level password protection with PBKDF2 encryption (600k iterations)
- **Individual Rule Locks**: Protect specific rules with their own passwords
- **Secure Storage**: Encrypted SharedPreferences for sensitive data
- **Crash Handler**: Detailed crash reporting for debugging

### Intelligent Features
- **Accessibility-Based Blocking**: No VPN required - uses Android's accessibility services
- **Real-Time Monitoring**: Polls usage stats every 5 seconds for accurate enforcement
- **App Icon Caching**: Efficient LRU cache for smooth performance
- **Website Favicons**: Visual identification with Google's favicon service

---

## Technical Architecture

**Built with modern Android best practices:**

- **Kotlin** - Primary language with coroutines for async operations
- **Jetpack Compose** - Modern declarative UI with Material 3 design
- **MVVM + Clean Architecture** - Separation of concerns with clear data flow
- **Hilt Dependency Injection** - Scalable and testable architecture
- **Room Database** - Local persistence with type-safe queries
- **Accessibility Services** - Non-intrusive app and website monitoring

### Core Components

- **Monitoring Service**: Background service tracking foreground apps and usage statistics
- **Accessibility Service**: Real-time detection of app launches and browser URL changes
- **Block Overlay**: Full-screen overlay preventing access to blocked content
- **Schedule Alarms**: AlarmManager-based scheduling for automatic rule enforcement

---

## Project Highlights

- **78 commits** of iterative development
- **Clean codebase** following Kotlin idioms and Android best practices
- **Personal use app** - Built to solve my own digital addiction challenges
- **No external dependencies** on VPN services or cloud infrastructure
- **Offline-first** - All data stored locally on device

---

## Download & Installation

**[Download APK](/selflock.apk)** - Install directly on your Android device (Android 14+)

*Note: You may need to enable "Install from Unknown Sources" in your device settings.*

---

## Source Code

View the complete source code on [GitHub](https://github.com/EtashTyagi/AndroidAddictionControl)

---

**Built with passion using Kilo Code and Vibe Coding methodologies.**
