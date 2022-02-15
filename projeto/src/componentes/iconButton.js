
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";


const IconButton = ({IconChecked, IconUnchecked}) =>{

    const [checked, setChecked] = useState(false);

    const handleChecked =() =>{
        setChecked(!checked)
    };

    return(
        <TouchableOpacity>
              <Image
                     style={style.cardIconBoxImage}
                      source={checked ? IconChecked : IconUnchecked}
        />  
             </TouchableOpacity>
      
    );
};

export default IconButton;

const style = StyleSheet.create({
    cardIconBoxImage : {
        marginRight:3
    }
});