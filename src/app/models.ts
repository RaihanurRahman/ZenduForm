export interface IMenu {
    icon: string;
    name: string;
    isActive: boolean;
}

export interface IForm {
    name: string;
    id: string;
}

export interface ISubmission {
    workFlow: string;
    from: string;
    to: string;
    due: string;
    status: string;
}

export interface IMarker {
   lat: number;
   lng: number;
   draggable: boolean;
   label?: string;
}
