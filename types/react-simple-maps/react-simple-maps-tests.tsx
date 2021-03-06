import * as React from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    Markers,
    ZoomableGroup,
} from 'react-simple-maps';

const Map = () => (
    <ComposableMap
        projectionConfig={{
            rotation: [-11, 0, 0],
            scale: 205,
        }}
        height={551}
        style={{
            height: 'auto',
            width: '100%',
        }}
        width={980}
    >
        <ZoomableGroup center={[0, 20]} disablePanning={true}>
            <Geographies geography="/worldmap.json">
                {(geographies, projection) =>
                    geographies.map((geography, index) => (
                        <Geography
                            key={index}
                            geography={geography}
                            projection={projection}
                            style={{
                                default: {
                                    fill: '#ECEFF1',
                                    outline: 'none',
                                    stroke: '#607D8B',
                                    strokeWidth: 0.75,
                                },
                                hover: {
                                    fill: '#607D8B',
                                    outline: 'none',
                                    stroke: '#607D8B',
                                    strokeWidth: 0.75,
                                },
                                pressed: {
                                    fill: '#607D8B',
                                    outline: 'none',
                                    stroke: '#607D8B',
                                    strokeWidth: 0.75,
                                },
                            }}
                        />
                    ))
                }
            </Geographies>
            <Markers>
                <Marker marker={{ coordinates: [1, 1] }}>
                    <circle
                        cx={0}
                        cy={0}
                        r={5}
                        style={{
                            fill: '#D13913',
                        }}
                    />
                </Marker>
            </Markers>
        </ZoomableGroup>
    </ComposableMap>
);
