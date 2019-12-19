import * as PropTypes from 'prop-types';
import { Component, ReactElement } from 'react';
import { ImageBackgroundProperties, ImageStyle, LayoutChangeEvent } from 'react-native';
export interface IFitImageProps extends ImageBackgroundProperties {
    children?: ReactElement<any>;
    /**
     * Whether should display activity indicator or not
     */
    indicator?: boolean;
    /**
     * Color of activity indicator in string
     */
    indicatorColor?: string;
    /**
     * Size of activity indicator
     */
    indicatorSize?: 'small' | 'large' | number;
    /**
     * Original height of the image
     *
     * @description
     * If you already know the height of the image you can pass it here.
     * Then it will be used instead of fetching the size information remotely.
     */
    originalHeight?: number;
    /**
     * Original width of the image
     *
     * @description
     * If you already know the width of the image you can pass it here.
     * Then it will be used instead of fetching the size information remotely.
     */
    originalWidth?: number;
}
export interface IFitImageState {
    isLoading: boolean;
    layoutWidth: number;
    originalHeight: number;
    originalWidth: number;
}
declare class FitImage extends Component<IFitImageProps, IFitImageState> {
    static propTypes: {
        indicator: PropTypes.Requireable<boolean>;
        indicatorColor: PropTypes.Requireable<string>;
        indicatorSize: PropTypes.Requireable<string | number>;
        originalHeight: PropTypes.Requireable<number>;
        originalWidth: PropTypes.Requireable<number>;
    } | {
        indicator: PropTypes.Requireable<boolean>;
        indicatorColor: PropTypes.Requireable<string>;
        indicatorSize: PropTypes.Requireable<string | number>;
        originalHeight: PropTypes.Requireable<number>;
        originalWidth: PropTypes.Requireable<number>;
        style?: PropTypes.Validator<import("react-native").StyleProp<import("react-native").ViewStyle>> | undefined;
        imageStyle?: PropTypes.Validator<import("react-native").StyleProp<ImageStyle>> | undefined;
        onLayout?: PropTypes.Validator<((event: LayoutChangeEvent) => void) | null | undefined> | undefined;
        onError?: PropTypes.Validator<((error: {
            nativeEvent: any;
        }) => void) | null | undefined> | undefined;
        onLoad?: PropTypes.Validator<(() => void) | null | undefined> | undefined;
        onLoadEnd?: PropTypes.Validator<(() => void) | null | undefined> | undefined;
        onLoadStart?: PropTypes.Validator<(() => void) | null | undefined> | undefined;
        progressiveRenderingEnabled?: PropTypes.Validator<boolean | null | undefined> | undefined;
        resizeMode?: PropTypes.Validator<"cover" | "contain" | "stretch" | "repeat" | "center" | null | undefined> | undefined;
        resizeMethod?: PropTypes.Validator<"auto" | "resize" | "scale" | null | undefined> | undefined;
        source?: PropTypes.Validator<import("react-native").ImageURISource | import("react-native").ImageURISource[]> | undefined;
        loadingIndicatorSource?: PropTypes.Validator<import("react-native").ImageURISource | null | undefined> | undefined;
        testID?: PropTypes.Validator<string | null | undefined> | undefined;
        accessibilityLabel?: PropTypes.Validator<string | null | undefined> | undefined;
        accessible?: PropTypes.Validator<boolean | null | undefined> | undefined;
        blurRadius?: PropTypes.Validator<number | null | undefined> | undefined;
        capInsets?: PropTypes.Validator<import("react-native").Insets | null | undefined> | undefined;
        defaultSource?: PropTypes.Validator<number | import("react-native").ImageURISource | null | undefined> | undefined;
        onProgress?: PropTypes.Validator<((event: {
            nativeEvent: {
                loaded: number;
                total: number;
            };
        }) => void) | null | undefined> | undefined;
        onPartialLoad?: PropTypes.Validator<(() => void) | null | undefined> | undefined;
    } | {
        indicator: PropTypes.Requireable<boolean>;
        indicatorColor: PropTypes.Requireable<string>;
        indicatorSize: PropTypes.Requireable<string | number>;
        originalHeight: PropTypes.Requireable<number>;
        originalWidth: PropTypes.Requireable<number>;
        onLayout?: PropTypes.Validator<((event: LayoutChangeEvent) => void) | null | undefined> | undefined;
        onError?: PropTypes.Validator<((error: {
            nativeEvent: any;
        }) => void) | null | undefined> | undefined;
        onLoad?: PropTypes.Validator<(() => void) | null | undefined> | undefined;
        onLoadEnd?: PropTypes.Validator<(() => void) | null | undefined> | undefined;
        onLoadStart?: PropTypes.Validator<(() => void) | null | undefined> | undefined;
        progressiveRenderingEnabled?: PropTypes.Validator<boolean | null | undefined> | undefined;
        resizeMode?: PropTypes.Validator<"cover" | "contain" | "stretch" | "repeat" | "center" | null | undefined> | undefined;
        resizeMethod?: PropTypes.Validator<"auto" | "resize" | "scale" | null | undefined> | undefined;
        source?: PropTypes.Validator<import("react-native").ImageURISource | import("react-native").ImageURISource[]> | undefined;
        loadingIndicatorSource?: PropTypes.Validator<import("react-native").ImageURISource | null | undefined> | undefined;
        style?: PropTypes.Validator<import("react-native").StyleProp<ImageStyle>> | undefined;
        testID?: PropTypes.Validator<string | null | undefined> | undefined;
        accessibilityLabel?: PropTypes.Validator<string | null | undefined> | undefined;
        accessible?: PropTypes.Validator<boolean | null | undefined> | undefined;
        blurRadius?: PropTypes.Validator<number | null | undefined> | undefined;
        capInsets?: PropTypes.Validator<import("react-native").Insets | null | undefined> | undefined;
        defaultSource?: PropTypes.Validator<number | import("react-native").ImageURISource | null | undefined> | undefined;
        onProgress?: PropTypes.Validator<((event: {
            nativeEvent: {
                loaded: number;
                total: number;
            };
        }) => void) | null | undefined> | undefined;
        onPartialLoad?: PropTypes.Validator<(() => void) | null | undefined> | undefined;
    } | {
        indicator: PropTypes.Requireable<boolean>;
        indicatorColor: PropTypes.Requireable<string>;
        indicatorSize: PropTypes.Requireable<string | number>;
        originalHeight: PropTypes.Requireable<number>;
        originalWidth: PropTypes.Requireable<number>;
        style?: PropTypes.Validator<import("react-native").StyleProp<ImageStyle>> | PropTypes.Validator<import("react-native").StyleProp<import("react-native").ViewStyle>> | undefined;
        imageStyle?: PropTypes.Validator<import("react-native").StyleProp<ImageStyle>> | undefined;
        onLayout?: PropTypes.Validator<((event: LayoutChangeEvent) => void) | null | undefined> | undefined;
        onError?: PropTypes.Validator<((error: {
            nativeEvent: any;
        }) => void) | null | undefined> | undefined;
        onLoad?: PropTypes.Validator<(() => void) | null | undefined> | undefined;
        onLoadEnd?: PropTypes.Validator<(() => void) | null | undefined> | undefined;
        onLoadStart?: PropTypes.Validator<(() => void) | null | undefined> | undefined;
        progressiveRenderingEnabled?: PropTypes.Validator<boolean | null | undefined> | undefined;
        resizeMode?: PropTypes.Validator<"cover" | "contain" | "stretch" | "repeat" | "center" | null | undefined> | undefined;
        resizeMethod?: PropTypes.Validator<"auto" | "resize" | "scale" | null | undefined> | undefined;
        source?: PropTypes.Validator<import("react-native").ImageURISource | import("react-native").ImageURISource[]> | undefined;
        loadingIndicatorSource?: PropTypes.Validator<import("react-native").ImageURISource | null | undefined> | undefined;
        testID?: PropTypes.Validator<string | null | undefined> | undefined;
        accessibilityLabel?: PropTypes.Validator<string | null | undefined> | undefined;
        accessible?: PropTypes.Validator<boolean | null | undefined> | undefined;
        blurRadius?: PropTypes.Validator<number | null | undefined> | undefined;
        capInsets?: PropTypes.Validator<import("react-native").Insets | null | undefined> | undefined;
        defaultSource?: PropTypes.Validator<number | import("react-native").ImageURISource | null | undefined> | undefined;
        onProgress?: PropTypes.Validator<((event: {
            nativeEvent: {
                loaded: number;
                total: number;
            };
        }) => void) | null | undefined> | undefined;
        onPartialLoad?: PropTypes.Validator<(() => void) | null | undefined> | undefined;
    };
    private ImageComponent;
    private isFirstLoad;
    private mounted;
    private sizeStyle;
    private style;
    constructor(props: IFitImageProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private shouldDisplayIndicator;
    private onLoad;
    private onLoadStart;
    private onError;
    private getHeight;
    private getOriginalHeight;
    private getOriginalWidth;
    private getRatio;
    private onLayout;
    private fetchOriginalSizeFromRemoteImage;
    private setOriginalSize;
    private renderActivityIndicator;
}
export default FitImage;
