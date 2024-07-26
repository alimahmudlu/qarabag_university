import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import SgWidgetItem from "@/admin/components/ui/WidgetItem";

const SortableItem = (props) => {
    const {
        indexz,
        widget,
        statusOptions,
        dataTypes,
        handleChange
    } = props

    return (
        <SgWidgetItem
            key={indexz}
            index={indexz}
            data={widget?.widget}
            values={widget}
            statusOptions={statusOptions}
            dataTypesOptions={dataTypes}
            handleChange={handleChange}
        />
    )
}

export default SortableElement(SortableItem);