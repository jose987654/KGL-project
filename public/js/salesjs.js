const handleInput = () => {
  // Produce Name
  document.getElementById("produce_name").value =
    document.getElementById("produceName").value;

  // Produce Type
  document.getElementById("produce_type").value =
    document.getElementById("produceType").value;

  // Date/Time
  document.getElementById("date_time").value = Date();

  if (document.getElementById("transaction_name").value === "Sales")
    // Purchasing Cost/Kg
    document.getElementById("purchasing_cost").value =
      document.getElementById("retail_price").value;

  // Total Purchasing Cost
  document.getElementById("total_cost").value =
    document.getElementById("tonnage").value *
    document.getElementById("purchasing_cost").value;

  // Balance (Produce Sold on credit/deferred payment)
  document.getElementById("balance").value =
    document.getElementById("total_cost").value -
    document.getElementById("amount_received").value;
};

const submitTransaction = () => {
  // Hide Transaction Form after submit
  $("#transaction").css("display", "none");
  // Then immediately unhide Store Form
  $("#store").css("display", "block");
};

const handleSubmit = () => {
  // Total Quantity Sold
  document.getElementById("total_quantity_sold").value =
    document.getElementById("total_quantity_sold").value +
    document.getElementById("tonnage").value;

  // Total Sales
  document.getElementById("total_sales").value =
    document.getElementById("total_sales").value +
    document.getElementById("total_cost").value;

  // Unsold Stock
  document.getElementById("unsold_stock").value =
    document.getElementById("total_quantity_purchased").value -
    document.getElementById("total_quantity_sold").value;
};
