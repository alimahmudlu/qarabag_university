import React from 'react';
import SortableItem from './SortableItem';
import { SortableContainer } from 'react-sortable-hoc';
import SgWidgetItem from "@/admin/components/ui/WidgetItem";

const SortableList = (props) => {
    const {
        data,
        setData,
        valueErrors,
        setValueErrors,
        dataTypes,
        statusOptions,
        handleChange,
        handleRemove,

        toggleWidgetDataTypeModal,
        widgetDataTypeModal
    } = props

    return (
        <div className='widgets flex flex-column gap-[16px]'>
            {(data?.page_widgets || []).sort((a, b) => a?.row - b?.row).map((widget, index) => {
                return (
                    <SortableItem
                        key={`item-${index}`}
                        index={index}
                        value={index}
                        indexz={index}
                        widget={widget}
                        statusOptions={statusOptions}
                        dataTypesOptions={dataTypes}
                        handleChange={handleChange}
                        handleRemove={handleRemove}

                        data={data}
                        setData={setData}
                        valueErrors={valueErrors}
                        setValueErrors={setValueErrors}

                        toggleWidgetDataTypeModal={toggleWidgetDataTypeModal}
                        widgetDataTypeModal={widgetDataTypeModal}
                    />
                )
            })}
        </div>
    );
}

export default SortableContainer(SortableList);