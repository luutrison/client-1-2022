const _giaodien = (data) => {
  return {
    bocuc: {
      getData() {
        return data;
      },
      setLayout(name) {
        try {
            if (data.bocuc.current !== name) {
                data.bocuc.current = name;
            }
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
};

export { _giaodien };

