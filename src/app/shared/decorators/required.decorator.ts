
export function Required(selector: string) {
    return (target: { ngOnInit?: () => void, [prop: string]: any }, prop: string) => {
        if (target['ngOnInit']) {
            const original: Function | null = target['ngOnInit'];
            target['ngOnInit'] = function () {
                    if (this[prop] === undefined) {
                        throw new Error(`${selector}, [${prop}] attribute is required`);
                    }
                    if (original) {
                        original.apply(this);
                    }
                };
        }
    }
}