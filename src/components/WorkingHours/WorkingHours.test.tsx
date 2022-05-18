import React from "react";
import { render } from "@testing-library/react"

import WorkingHours from "./WorkingHours";

describe("WorkingHours", () => {
    test("renders the WorkingHours component", () => {
        const data  = [
                { key: "mon", name: "Monday", ranges: [] },
                { key: "tue", name: "Tuesday", ranges: []  },
                { key: "wed", name: "Wednesday", ranges: []  },
                { key: "thu", name: "Thursday", ranges: []  },
                { key: "fri", name: "Friday", ranges: []  },
                { key: "sat", name: "Saturday", ranges: []  },
                { key: "sun", name: "Sunday", ranges: []  }
        ];
        
        render(<WorkingHours data={data}/>);
    });
});
