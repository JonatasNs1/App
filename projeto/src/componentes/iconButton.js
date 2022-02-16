
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";


const IconButton = ({iconChecked, iconUnchecked, ativado, desativado}) =>{

    const [checked, setChecked] = useState(false);

    const handleChecked =() =>{
        setChecked(!checked);
        if(checked){
            ativado(checked);
        }else{
            desativado(checked);
        }
    };

    return(
        <TouchableOpacity onPress ={handleChecked}>
              <Image
                     style={style.cardIconBoxImage}
                      source={checked ? iconChecked : iconUnchecked}
                      width={50}
                      height={50}
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