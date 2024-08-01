import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import SgWidgetItem from "@/admin/components/ui/WidgetItem";

const SortableItem = (props) => {
    const {
        indexz,
        widget,
        statusOptions,
        dataTypesOptions,
        handleChange,
        toggleFileManagerModal,
        fileManagerModal,
        data,
        setData,
        valueErrors,
        setValueErrors,
    } = props

    return (
        <SgWidgetItem
            key={indexz}
            index={indexz}
            data={widget?.widget}
            values={widget}
            statusOptions={statusOptions}
            dataTypesOptions={dataTypesOptions}
            handleChange={handleChange}
            toggleFileManagerModal={toggleFileManagerModal}
            fileManagerModal={fileManagerModal}

            Fdata={data}
            FsetData={setData}
            FvalueErrors={valueErrors}
            FsetValueErrors={setValueErrors}
        />
    )
}

export default SortableElement(SortableItem);