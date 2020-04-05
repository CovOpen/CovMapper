import { Reducer } from "./reduxHelper";
import { Viewport } from "react-leaflet";
import { GeoJSON } from "geojson";

export enum Step {
    Welcome,
    Map,
    About,
    Imprint,
}
export const backendUrl = "/api";

export interface MapArea {
    celat: number;
    celng: number;
    nelat: number;
    nelng: number;
}

export interface AppState {
    activeStep: Step;
    viewport: Viewport;
    currentPosition: Array<number> | null;
    userAllowedLocation: boolean;
    currentArea: MapArea | null;
    history: Step[];
    postCodeAreas: GeoJSON | null;
}

export const defaultAppState: AppState = {
  activeStep: Step.Welcome,
  userAllowedLocation: true,
  currentPosition: null,
  viewport: {
    center: [51.65892664880053, 10.129394531250002], // Germany as start position
    zoom: 5,
  },
  currentArea: null,
  history: [],
  postCodeAreas: null,
};

class AppReducer extends Reducer<AppState> {
  constructor() {
    super(defaultAppState);
  }
  public gotoStep(step: Step) {
    window.history.pushState({ step: step}, Step[step]);
    this.state.history.push(this.state.activeStep);
    this.state.activeStep = step;
  }
  public setUserAllowedLocation(allowed: boolean) {
    this.state.userAllowedLocation = allowed;
  }
  public setCurrentPosition(position: Array<number>) {
    this.state.currentPosition = position;
  }
  public setViewport(viewport: Viewport) {
    this.state.viewport = viewport;
  }
  public setCurrentArea(area: MapArea) {
    this.state.currentArea = area;
  }
  public setPostCodeAreas(areas: GeoJSON) {
    this.state.postCodeAreas = areas;
  }
}

const AppReducerInstance = new AppReducer();
export const AppApi = AppReducerInstance.getApi();
export const AppReduxReducer = AppReducerInstance.getReduxReducer();
