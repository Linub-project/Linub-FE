import Select from "@/components/common/input/select";
import Terms_0_1 from "@/components/static/terms/snapshot/0.1";
import { useState } from "react";

export const SNAPSHOT = [
    {
        value: "0.1",
        label: "v0.1",
        announcedAt: "2026.11.11",
        effectiveAt: "2026.11.11",
        apply: "2026.11.11 ~ 현재",
        revision: "서비스 이용 약관 초안",
        component: Terms_0_1,
    },
]

const Terms = () => {
    const [snapshot, setSnapshot] = useState(
        SNAPSHOT[SNAPSHOT.length - 1].value
    );

    const current = SNAPSHOT.find(s => s.value === snapshot);
    const Document = current.component;

    return (
        <>
            <Select
                value={snapshot}
                options={SNAPSHOT}
                onChange={setSnapshot}
            />
            <Document current={current} />

        </>
    );
}

export default Terms;