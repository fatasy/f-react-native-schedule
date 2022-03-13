# Fantastic React Native Schedule

Flexible scheduling library with more built-in features and enhanced customization options

## Installation

```sh
yarn add f-react-native-schedule
```

## Usage

```js
import Schedule from 'f-react-native-schedule';
// ...

<Schedule />;
```

## Day View

<kbd>
  <img src="https://github.com/fatasy/f-react-native-schedule/blob/e43556f79712d089bc85cb3215506692a7c7d027/assets/day-view-schedule.png?raw=true" >
</kbd>

## Week View

<kbd>
  <img src="https://github.com/fatasy/f-react-native-schedule/blob/e43556f79712d089bc85cb3215506692a7c7d027/assets/week-view-schedule.png?raw=true" >
</kbd>

## Properties API

None of the following properties are required. A simple <Schedule /> Will still render an empty schedule.

<<<<<<< HEAD
| Prop                        | Description                                                                             | Default                                                                                                                                               | Type                                                                                                                     |
| --------------------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **`schedules`**             | Array of schedules, to configure the field names use the `schedulingSettings` property. | `Empty Array`                                                                                                                                         | `Array`                                                                                                                  |
| **`selectedDate`**          | To mark the active (current) date in the schedule.                                      | `new Date()`                                                                                                                                          | Date                                                                                                                     |
| **`startHour`**             | It is used to specify the start time, from which the Schedule starts to be displayed.   | `00:00`                                                                                                                                               | string                                                                                                                   |
| **`endHour`**               | It is used to specify the end time at which the schedule ends.                          | `24:00`                                                                                                                                               | string                                                                                                                   |
| **`currentView`**           | Schedule view type.                                                                     | `day`                                                                                                                                                 | `day` or `week`                                                                                                          |
| **`cellDimensions`**        | Cell width and height configuration, header cell, sidebar cell and content cell.        | `{height?: number, width?: number}`                                                                                                                   | {height: 80, width: 100}                                                                                                 |
| **`schedulingSettings`**    | Scheduling configuration.                                                               | [Default Scheduling Settings](https://github.com/fatasy/f-react-native-schedule/blob/e3df449b645b412e8ce63bcd8d88c20a0601545a/src/constants.ts#L11)   | [Type](https://github.com/fatasy/f-react-native-schedule/blob/e3df449b645b412e8ce63bcd8d88c20a0601545a/src/types.ts#L40) |
| **`headerSettings`**        | Header configuration.                                                                   | [Default Header Settings](https://github.com/fatasy/f-react-native-schedule/blob/e3df449b645b412e8ce63bcd8d88c20a0601545a/src/constants.ts#L35)       | [Type](https://github.com/fatasy/f-react-native-schedule/blob/e3df449b645b412e8ce63bcd8d88c20a0601545a/src/types.ts#L46) |
| **`sidebarSettings`**       | Sidebar configuration.                                                                  | [Default Sidebar Settings](https://github.com/fatasy/f-react-native-schedule/blob/e3df449b645b412e8ce63bcd8d88c20a0601545a/src/constants.ts#L30)      | [Type](https://github.com/fatasy/f-react-native-schedule/blob/e3df449b645b412e8ce63bcd8d88c20a0601545a/src/types.ts#L56) |
| **`CellSettings `**         | Cell content configuration.                                                             | [Default Cell Content Settings](https://github.com/fatasy/f-react-native-schedule/blob/e3df449b645b412e8ce63bcd8d88c20a0601545a/src/constants.ts#L39) | [Type](https://github.com/fatasy/f-react-native-schedule/blob/e3df449b645b412e8ce63bcd8d88c20a0601545a/src/types.ts#L23) |
| **`onCellPress`**           | Return function for pressing a cell                                                     | `-`                                                                                                                                                   | (date event) => void                                                                                                     |
| **`onCellLongPress`**       | Return function for long pressing a cell.                                               | `-`                                                                                                                                                   | (date event) => void                                                                                                     |
| **`onSchedulingPress`**     | Return function for pressing a scheduling                                               | `-`                                                                                                                                                   | (scheduling, event) => void                                                                                              |
| **`onSchedulingLongPress`** | Return function for long pressing a scheduling.                                         | `-`                                                                                                                                                   | (scheduling, event) => void                                                                                              |
=======
| Prop                     | Description                                                                             | Default                                                                                                                                               | Type                                                                                                                     |
| ------------------------ | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **`schedules`**          | Array of schedules, to configure the field names use the `schedulingSettings` property. | `Empty Array`                                                                                                                                         | `Array`                                                                                                                  |
| **`selectedDate`**       | To mark the active (current) date in the schedule.                                      | `new Date()`                                                                                                                                          | Date                                                                                                                     |
| **`startHour`**          | It is used to specify the start time, from which the Schedule starts to be displayed.   | `00:00`                                                                                                                                               | string                                                                                                                   |
| **`endHour`**            | It is used to specify the end time at which the schedule ends.                          | `24:00`                                                                                                                                               | string                                                                                                                   |
| **`currentView`**        | Schedule view type.                                                                     | `week`                                                                                                                                                 | `day` or `week`                                                                                                          |
| **`cellDimensions`**     | Cell width and height configuration, header cell, sidebar cell and content cell.        | `{height?: number, width?: number}`                                                                                                                   | {height: 80, width: 100}                                                                                                 |
| **`schedulingSettings`** | Scheduling configuration.                                                               | [Default Scheduling Settings](https://github.com/fatasy/f-react-native-schedule/blob/e3df449b645b412e8ce63bcd8d88c20a0601545a/src/constants.ts#L11)   | [Type](https://github.com/fatasy/f-react-native-schedule/blob/e3df449b645b412e8ce63bcd8d88c20a0601545a/src/types.ts#L40) |
| **`headerSettings`**     | Header configuration.                                                                   | [Default Header Settings](https://github.com/fatasy/f-react-native-schedule/blob/e3df449b645b412e8ce63bcd8d88c20a0601545a/src/constants.ts#L35)       | [Type](https://github.com/fatasy/f-react-native-schedule/blob/e3df449b645b412e8ce63bcd8d88c20a0601545a/src/types.ts#L46) |
| **`sidebarSettings`**    | Sidebar configuration.                                                                  | [Default Sidebar Settings](https://github.com/fatasy/f-react-native-schedule/blob/e3df449b645b412e8ce63bcd8d88c20a0601545a/src/constants.ts#L30)      | [Type](https://github.com/fatasy/f-react-native-schedule/blob/e3df449b645b412e8ce63bcd8d88c20a0601545a/src/types.ts#L56) |
| **`CellSettings `**      | Cell content configuration.                                                             | [Default Cell Content Settings](https://github.com/fatasy/f-react-native-schedule/blob/e3df449b645b412e8ce63bcd8d88c20a0601545a/src/constants.ts#L39) | [Type](https://github.com/fatasy/f-react-native-schedule/blob/e3df449b645b412e8ce63bcd8d88c20a0601545a/src/types.ts#L23) |
| **`onCellPress`**        | Return function for pressing a cell                                                     | `-`                                                                                                                                                   | (date event) => void                                                                                                     |
| **`onCellLongPress`**    | Return function for long pressing a cell.                                               | `-`                                                                                                                                                   | (date event) => void                                                                                                     |
| **`onSchedulePress`**    | Return function for pressing a scheduling                                               | `-`                                                                                                                                                   | (scheduling, event) => void                                                                                              |
| **`onCellLongPress`**    | Return function for long pressing a scheduling.                                         | `-`                                                                                                                                                   | (scheduling, event) => void                                                                                              |
>>>>>>> 7cd376c476bd4c4d4ed2cdc23cca838897db9f9d

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.
