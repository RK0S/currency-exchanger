import Options from "../Options/Options";

import cl from "./Base.module.css";

const Base = ({defaultCurrencies}) => {
    return (
        <div className={cl.base}>
            <Options defaultCurrencies={defaultCurrencies} />
        </div>
    );
};

export default Base;