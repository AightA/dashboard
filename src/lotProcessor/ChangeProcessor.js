export function processChange(change, s) {
    switch (change.type) {
        case 'added':
            addLot(change.doc, s);
            return;
        case 'modified':
            modifyLot(change.doc, s);
            return;
        case 'removed':
            removeLot(change.doc, s);
            return;
        default:
            return;
    }
}

function addLot(change, s) {

    s.setState(state => {
        const lots = state.lots.concat(change);
        return {
            lots
        };
    })
}

function modifyLot(change, s) {

    s.setState(state => {
        const list = state.lots.filter(item => item.id !== change.id);
        const lots = list.concat(change);
        return {
            lots
        };
    })
}

function removeLot(change, s) {
    s.setState(state => {
        const lots = state.lots.filter(item => item.id !== change.id);
        return {
            lots
        };
    })
}