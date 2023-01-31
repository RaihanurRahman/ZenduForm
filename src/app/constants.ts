import { IForm, IMenu, ISubmission, IMarker } from './models';
export const Menulist: IMenu[] = [
    {
        icon: 'format_list_bulleted',
        name: 'Forms',
        isActive: false
    },
    {
        icon: 'people',
        name: 'Customers',
        isActive: false
    },
    {
        icon: 'graphic_eq',
        name: 'Submissions',
        isActive: true
    },
    {
        icon: 'history',
        name: 'History',
        isActive: false
    },
    {
        icon: 'insert_chart_outlined',
        name: 'Reports',
        isActive: false
    },
    {
        icon: 'insert_chart_outlined',
        name: 'Workflow',
        isActive: false
    }
];

export const FormList: IForm[] = [
    {
        id: '1',
        name: 'Dash'
    },
    {
        id: '2',
        name: 'Dash2'
    },
    {
        id: '3',
        name: 'Dash3'
    }
];

export const submissionList: ISubmission[] = [
    {
        workFlow: 'Requires Location',
        from: 'denisgordiyenya@gmail.com',
        to: 'denisgordiyenya@gmail.com',
        due: '06 December', // For simplicity used this
        status: 'Uncomplete'
    },
    {
        workFlow: 'Requires Location',
        from: 'denisgordiyenya@gmail.com',
        to: 'denisgordiyenya@gmail.com',
        due: '06 December', // For simplicity used this
        status: 'Uncomplete'
    },
    {
        workFlow: 'Requires Location',
        from: 'denisgordiyenya@gmail.com',
        to: 'denisgordiyenya@gmail.com',
        due: '06 December', // For simplicity used this
        status: 'Low Risk'
    },
    {
        workFlow: 'Requires Location',
        from: 'denisgordiyenya@gmail.com',
        to: 'denisgordiyenya@gmail.com',
        due: '06 December', // For simplicity used this
        status: 'Uncomplete'
    },
    {
        workFlow: 'Requires Location',
        from: 'denisgordiyenya@gmail.com',
        to: 'denisgordiyenya@gmail.com',
        due: '06 December', // For simplicity used this
        status: 'Low Risk'
    },
    {
        workFlow: 'Requires Location',
        from: 'denisgordiyenya@gmail.com',
        to: 'denisgordiyenya@gmail.com',
        due: '06 December', // For simplicity used this
        status: 'Needs Review'
    },
    {
        workFlow: 'Requires Location',
        from: 'denisgordiyenya@gmail.com',
        to: 'denisgordiyenya@gmail.com',
        due: '06 December', // For simplicity used this
        status: 'Low Risk'
    },
    {
        workFlow: 'Requires Location',
        from: 'denisgordiyenya@gmail.com',
        to: 'denisgordiyenya@gmail.com',
        due: '06 December', // For simplicity used this
        status: 'Needs Review'
    }
];

export const markersList: IMarker[] = [
    {
        lat: 51.673858,
        lng: 7.815982,
        label: 'A',
        draggable: true
    },
    {
        lat: 51.373858,
        lng: 7.215982,
        label: 'B',
        draggable: false
    },
    {
        lat: 51.723858,
        lng: 7.895982,
        label: 'C',
        draggable: true
    }
];
