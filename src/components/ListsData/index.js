import React from "react";
import MaterialTable from "material-table";
import uuid from "uuid";
import { Link } from "react-router-dom";

const prepareData = () => {
  let defaultData = {
    columns: [
      {
        title: "name",
        field: "name"
      },
      {
        title: "Дата Создания",
        field: "dateOfCreate",
        type: "date"
      },
      {
        title: "Город",
        field: "city"
      },
      {
        title: "Общий ценник",
        field: "totalPrice",
        type: "num"
      },
      {
        title: "Проверено",
        field: "checked",
        type: "boolean"
      },
      {
        title: "Покупки",
        field: "link"
      }
    ],
    data: []
  };

  for (let i = 0; i < 2; i++) {
    const id = uuid();

    defaultData.data.push({
      id,
      name: "Дикси",
      dateOfCreate: "08.07.2018",
      city: "Калуга",
      totalPrice: "10220",
      checked: 1,
      link: <Link to={`/${id}`}> Открыть список</Link>
    });
  }

  return defaultData;
}

export default function MaterialTableDemo() {
  const [state, setState] = React.useState(prepareData());

  return (
    <div>
      <MaterialTable
        title="Список списокв покупок"
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: async newData => {
            const data = [...state.data];
            data.push(newData);
            setState({ ...state, data });
          },
          onRowUpdate: async (newData, oldData) => {
            const data = [...state.data];
            data[data.indexOf(oldData)] = newData;
            setState({ ...state, data });
          },
          onRowDelete: async oldData => {
            const data = [...state.data];
            data.splice(data.indexOf(oldData), 1);
            setState({ ...state, data });
          },
          onRowClick: async oldData => {
            const data = [...state.data];
            data.splice(data.indexOf(oldData), 1);
            setState({ ...state, data });
          }
        }}
      />
    </div>
  );
}
