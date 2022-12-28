import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";

import './style.css';

const languageMap = {
  pt: { label: "Português", dir: "ltr", active: true },
  en: { label: "English", dir: "ltr", active: false }
};

const LanguageSelect = () => {
  const selected = localStorage.getItem("i18nextLng") || "pt";
  const { t } = useTranslation();

  const [menuAnchor, setMenuAnchor] = useState(null);
  
  useEffect(() => {
    document.body.dir = languageMap[selected].dir;
  }, [menuAnchor, selected]);

  return (
    <div className="language-select">
      <Button onClick={({ currentTarget }) => setMenuAnchor(currentTarget)} style={{color: '#fff', fontFamily: 'Poppins', fontSize: '1em'}}>
        {languageMap[selected].label}
        <ArrowDropDown fontSize="small" style={{color: '#FF7E99', fontSize: '1.7em'}} />
      </Button>
      <hr/>
      <Popover
        open={!!menuAnchor}
        anchorEl={menuAnchor}
        onClose={() => setMenuAnchor(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <div>
          <List>
            <ListSubheader>{t("select_language")}</ListSubheader>
            {Object.keys(languageMap)?.map(item => (
              <ListItem
                button
                key={item}
                onClick={() => {
                  i18next.changeLanguage(item);
                  setMenuAnchor(null);
                }}
              >
                {languageMap[item].label}
              </ListItem>
            ))}
          </List>
        </div>
      </Popover>
    </div>
  );
};

export default LanguageSelect;