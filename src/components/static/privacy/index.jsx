import Select from "@/components/common/input/select";
import Privacy_1_0 from "@/components/static/privacy/snapshot/1.0";
import Privacy_1_1 from "@/components/static/privacy/snapshot/1.1";
import { useEffect, useState } from "react";

const SNAPSHOT = [
    {
        value: "1.0",
        label: "1.0",
        component: <Privacy_1_0 />,
    },
    {
        value: "1.1",
        label: "1.1",
        component: <Privacy_1_1 />,
    },
]

const Privacy = () => {
    const [snapshot, setSnapshot] = useState(SNAPSHOT[SNAPSHOT.length-1].value);
    const [current, setCurrent] = useState(snapshot ? SNAPSHOT.find(s => s.value === snapshot) : SNAPSHOT[SNAPSHOT.length-1]);

    useEffect(() => {
        setCurrent(SNAPSHOT.find(s => s.value === snapshot));
    }, [snapshot]);

    return (
        <>
            <Select
                value={snapshot}
                options={SNAPSHOT}
                onChange={setSnapshot}
                placeholder="여기를 눌러 이전 버전을 확인할 수 있습니다."
            />
            {current.component}
        </>
    );
}

export default Privacy;