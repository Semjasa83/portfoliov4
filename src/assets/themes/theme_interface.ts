export enum AvailableProperties {
    Background = '--background-color',
    BackgroundContrast = '--background-contrast-color',
}

export enum Theme {
    Ayu = 'ayu',
    Test = 'test',
}

export interface IThemeOptions {
    name: Theme;
    customProperties: Record<AvailableProperties, string>;
}
    