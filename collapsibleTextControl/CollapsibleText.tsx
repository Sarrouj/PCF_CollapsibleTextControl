import {
  Button,
  FluentProvider,
  Input,
  teamsDarkTheme,
  teamsHighContrastTheme,
  teamsLightTheme,
  TextareaOnChangeData,
  Theme,
  webDarkTheme,
  webLightTheme,
} from "@fluentui/react-components";
import {
  ArrowAutofitHeightFilled,
  ArrowAutofitHeightInFilled,
} from "@fluentui/react-icons";
import { Textarea } from "@fluentui/react-components";

import * as React from "react";

interface propsTypes {
  theme: string;
  value: string;
  updateValue: (val: any) => void;
  height : any;
}

const CollapsibleText: React.FC<propsTypes> = ({
  theme,
  value,
  updateValue,
  height
}) => {
  const FluenUITheme: Record<string, Theme> = {
    webLightTheme: webLightTheme,
    webDarkTheme: webDarkTheme,
    teamsLightTheme: teamsLightTheme,
    teamsHighContrastTheme: teamsHighContrastTheme,
    teamsDarkTheme: teamsDarkTheme,
  };

  const [collapse, setCollapse] = React.useState(false);
  const onCollapse = () => {
    setCollapse((prev) => !prev);
  };

  return (
    <FluentProvider theme={FluenUITheme[theme]}>
      <div className="collapsibleTextArea">
        <Button
          icon={
            !collapse ? (
              <ArrowAutofitHeightInFilled />
            ) : (
              <ArrowAutofitHeightFilled />
            )
          }
          className="btn"
          appearance="transparent"
          onClick={onCollapse}
        ></Button>
        <Textarea
          appearance="filled-darker"
          className={`textArea ${collapse ? "" : "uncollapse"}`}
          style={collapse ? { height: `${height}px` } : undefined}
          value={value}
          onChange={(e, d) => updateValue(d.value)}
        />
      </div>
      {/* <div className="errorMsg">
        Input value length must be less than 3. Actual length is {value.length}
      </div> */}
    </FluentProvider>
  );
};

export default CollapsibleText;
