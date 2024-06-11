import { AvailableProperties, IThemeOptions, Theme } from './theme.interface';

export const ayuTheme: IThemeOptions = {
    name: Theme.Ayu,
    customProperties: {
        [AvailableProperties.Background]: '#0d1017',
        [AvailableProperties.BackgroundContrast]: '#bfbdb6',
    }
};

export const testTheme: IThemeOptions = {
    name: Theme.Test,
    customProperties: {
        [AvailableProperties.Background]: '#263238',
        [AvailableProperties.BackgroundContrast]: '#c9d1c9',
    }
};