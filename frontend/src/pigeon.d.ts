declare module 'pigeon-maps' {
    import { Component, ReactNode } from 'react';

    type LatLng = [number, number];

    interface ClickEvent {
        event: any;
        latLng: LatLng;
        pixel: number;
    }

    interface Props {
        center?: LatLng;
        // Coordinates of the map center in the format [lat, lng]. Use if the component is controlled, e.g. you'll be listening to onBoundsChanged and passing a new center when the bounds change.

        defaultCenter?: LatLng;
        // Initial coordinates of the map center in the format [lat, lng]. Use if the component is uncontrolled.

        zoom?: number;
        // Current zoom level, e.g. 12, use for controlled components and update when onBoundsChanged give you a new value.

        defaultZoom?: number;
        // The initial zoom for uncontrolled components.

        width?: number;
        // Width of the component in pixels. Defaults to 100% of the parent div if not set.

        height?: number;
        // Height of the component in pixels. Defaults to 100% of the parent div if not set.

        defaultWidth?: number;
        // If you don't specify a width, we wait until the component is mounted and measure the container before rendering tiles, markers and other objects. Setting defaultWidth assumes a width and renders everything before mounting. If the actual width of the component differs, it will just be re-rendered. Use this for example to render tiles on server rendering, when width is not set.

        defaultHeight?: number;
        // Similar as defaultWidth, but for the height.

        provider?: (x: number, y: number, z: number) => string;
        // Function that returns a TMS URL: (x, y, z) => url.

        animate?: boolean;
        // Animations enabled, true.

        animateMaxScreens?: number;
        // If an updated center prop is more than animateMaxScreens screens away, we will directly switch to it, otherwise smoothly animate to it. Defaults to 5

        zoomSnap?: boolean;
        // Snap to discrete zoom increments (14, 15, 16, etc) when scrolling with the mouse or pinching with touch events, Defaults to true.

        minZoom?: number;
        // The lowest zoom level possible. Defaults to 1

        maxZoom?: number;
        // The highest zoom level possible. Defaults to 18

        attribution?: ReactNode | false;
        // What to show as an attribution. React node or false to hide.

        attributionPrefix?: ReactNode | false;
        // Prefix before attribution. React node or false to hide.

        onClick?: ({ event, latLng, pixel }: ClickEvent) => void;
        // When map is clicked `function ({ event, latLng, pixel })``

        onBoundsChanged?: any;
        // When the bounds change, function ({ center, zoom, bounds, initial }). Use this for a controlled component, then set center and zoom when it's called. This callback also gets called on the initial mount (when the first bounds become known). In this case the prop initial will be set to true. It will be false on all subsequent calls.

        onAnimationStart?: () => void;
        // Called when the map starts moving

        onAnimationStop?: () => void;
        // Called when the map stops moving

        mouseEvents?: boolean;
        // Can the user interact with the map with the mouse? Defaults to true.

        touchEvents?: boolean;
        // Can the user interact with the map by touching it? Defaults to true.

        metaWheelZoom?: boolean;
        // Zooming with the mouse wheel only works when you hold down the meta (cmd/win) key. Defaults to false.

        metaWheelZoomWarning?: boolean;
        // Warning text to show if scrolling on a map with metaWheelZoom enabled, but without the meta key. Defaults to Use META+wheel to zoom!, where META is automatically replaced with either "⌘" or "⊞", depending on Mac vs non-Mac. Set to null to disable.

        twoFingerDrag?: boolean;
        // Moving the map requires touching with two fingers. Defaults to false.

        twoFingerDragWarning?: string | null;
        // Warning to show when twoFingerDrag and you try to move the map with one finger. Defaults to Use two fingers to move the map. Set to null to disable.

        warningZIndex?: number;
        // The z-index value for the meta warning. Defaults to 100

        boxClassname?: string;
        // The classname for the tiles div, allowing you to style it with a filter css property without impacting the overlays.
    }

    class Map extends Component<Props> { }

    export default Map;
}
