import React from "react";
import { render } from "@testing-library/react"

import WorkingHours from "./WorkingHours";

describe("WorkingHours", () => {
    test("renders the WorkingHours component", () => {
        const data  = [
                { key: "mon", name: "Monday", ranges: [{from: '05:00', to: '05:30'}, {from: '13:30', to: '14:00'}] },
                { key: "tue", name: "Tuesday", ranges: []  },
                { key: "wed", name: "Wednesday", ranges: []  },
                { key: "thu", name: "Thursday", ranges: []  },
                { key: "fri", name: "Friday", ranges: []  },
                { key: "sat", name: "Saturday", ranges: []  },
                { key: "sun", name: "Sunday", ranges: []  }
        ];
        
        render(<WorkingHours data={data}/>);
    });

    test("renders the WorkingHours component", () => {
        const data  = [
                { key: "mon", name: "Monday", ranges: [{from: '05:00', to: '05:30'}, {from: '13:30', to: '14:00'}] },
                { key: "tue", name: "Tuesday", ranges: []  },
                { key: "wed", name: "Wednesday", ranges: []  },
                { key: "thu", name: "Thursday", ranges: []  },
                { key: "fri", name: "Friday", ranges: []  },
                { key: "sat", name: "Saturday", ranges: []  },
                { key: "sun", name: "Sunday", ranges: []  }
        ];
        
        render(<WorkingHours data={data} allowReset={true}/>);
    });
});
