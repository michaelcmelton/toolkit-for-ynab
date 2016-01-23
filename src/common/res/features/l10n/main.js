(function poll() {
  // Waits until an external function gives us the all clear that we can run (at /shared/main.js)
  if ( typeof ynabToolKit !== "undefined"  && ynabToolKit.pageReady === true ) {
    function getDateInfo() {
      var selectedMonth = ynabToolKit.shared.parseSelectedMonth();
      var currentMonthName = ynabToolKit.l10n.Data.Global.Month[selectedMonth.getMonth() + 1];
      var previousMonthName;
      if (selectedMonth.getMonth() == 0) {
        previousMonthName = ynabToolKit.l10n.Data.Global.Month[12];
      }
      else {
        previousMonthName = ynabToolKit.l10n.Data.Global.Month[selectedMonth.getMonth()];
      }
      return {
        selectedMonth: selectedMonth,
        currentMonthName: currentMonthName,
        previousMonthName: previousMonthName
      }
    }

    ynabToolKit.l10n.localize.inspector = function () { // Keep feature functions contained within this
      var inspector = $('.budget-inspector');

      var headers = $(inspector).find("h3");
      headers[0].textContent = ynabToolKit.l10n.Data.Budget.Inspector.Totals.Budgeted;
      headers[1].textContent = ynabToolKit.l10n.Data.Budget.Inspector.Totals.Activity;
      headers[2].textContent = ynabToolKit.l10n.Data.Budget.Inspector.Totals.Available;
      headers[3].textContent = ynabToolKit.l10n.Data.Budget.Inspector.Totals.Inflows;
      headers[4].textContent = ynabToolKit.l10n.Data.Budget.Inspector.Totals.Quick;

      var buttons = $(inspector).find("button");
      buttons[0].childNodes[1].textContent = ynabToolKit.l10n.Data.Budget.Inspector.QuickBudgeting.Underfunded;
      buttons[1].childNodes[1].textContent = ynabToolKit.l10n.Data.Budget.Inspector.QuickBudgeting.BudgetedLastMonth;
      buttons[2].childNodes[1].textContent = ynabToolKit.l10n.Data.Budget.Inspector.QuickBudgeting.SpentLastMonth;
      buttons[3].childNodes[1].textContent = ynabToolKit.l10n.Data.Budget.Inspector.QuickBudgeting.AverageBudgeted;
      buttons[4].childNodes[1].textContent = ynabToolKit.l10n.Data.Budget.Inspector.QuickBudgeting.AverageSpent;

    }; // Keep feature functions contained within this
    ynabToolKit.l10n.localize.inspector();

    ynabToolKit.l10n.localize.calendarModal = function () {
      var calendar = $('.modal-calendar');
      var months = $(calendar).find('ul.ynab-calendar-months>li>button');
      for (var i = 0; i < months.length; i++) {
        months[i].textContent = ynabToolKit.l10n.Data.Global.Month[i + 1];
      }
    };
    ynabToolKit.l10n.localize.calendarModal();

    ynabToolKit.l10n.localize.budgetHeader = function ()  {
      var dateInfo = getDateInfo();
      var selectedMonth = dateInfo.selectedMonth;
      var currentMonthName = dateInfo.currentMonthName;
      var previousMonthName = dateInfo.previousMonthName;

      var button = $('.budget-header-calendar-date-button')[0];
      $(button).contents()[1].textContent = currentMonthName + " " + selectedMonth.getFullYear();

      $('.budget-header-totals-amount-label')[0].textContent = ynabToolKit.l10n.Data.Budget.Header.Totals.TBB;
      var stats = $(".budget-header-totals-cell-name");
      stats[0].textContent = ynabToolKit.l10n.Data.Budget.Header.Totals.Funds + " " + currentMonthName;
      stats[1].textContent = ynabToolKit.l10n.Data.Budget.Header.Totals.Overspent + " " + previousMonthName;
      stats[2].textContent = ynabToolKit.l10n.Data.Budget.Header.Totals.Budgeted + " " + currentMonthName;
      stats[3].textContent = ynabToolKit.l10n.Data.Budget.Header.Totals.BIF;

      var calendarNote = $('.budget-header-calendar-note').contents()[1];
      if (calendarNote.textContent == "Enter a note...") {
        calendarNote.textContent = ynabToolKit.l10n.Data.Budget.Header.Placeholder.Note;
      }

      if (!ynabToolKit.options.hideAOM) {
        $('.budget-header-days-label')[0].textContent = ynabToolKit.l10n.Data.Budget.Header.Metric.AoM;
      }
    };
    ynabToolKit.l10n.localize.budgetHeader();

    ynabToolKit.l10n.localize.budgetTable = function ()  {
      budgetTableHeader = $('.budget-table-header');
      $(budgetTableHeader).find('.budget-table-cell-name')[0].textContent = ynabToolKit.l10n.Data.Budget.Table.Header.Category;
      $(budgetTableHeader).find('.budget-table-cell-budgeted')[0].textContent = ynabToolKit.l10n.Data.Budget.Table.Header.Budgeted;
      $(budgetTableHeader).find('.budget-table-cell-activity')[0].textContent = ynabToolKit.l10n.Data.Budget.Table.Header.Activity;
      $(budgetTableHeader).find('.budget-table-cell-available')[0].textContent = ynabToolKit.l10n.Data.Budget.Table.Header.Available;
      if (ynabToolKit.options.insertPacingColumns) {
        $(budgetTableHeader).find('.budget-table-cell-pacing')[0].textContent = ynabToolKit.l10n.Data.Budget.Table.Header.Pacing;
      }

      $('.budget-toolbar-add-category').contents()[4].textContent = ynabToolKit.l10n.Data.Budget.Table.Button.CategoryGroup;
    }
    ynabToolKit.l10n.localize.budgetTable();

    ynabToolKit.l10n.localize.addCategoryGroupModal = function () {
      var modal = $('.modal-add-master-category');
      $(modal).find('input')[0].setAttribute("placeholder", ynabToolKit.l10n.Data.Budget.Table.Placeholder.NewCategoryGroup);
      $(modal).find('.button-primary').contents()[0].textContent = ynabToolKit.l10n.Data.Global.Button.Ok;
      $(modal).find('.button-cancel').contents()[0].textContent = ynabToolKit.l10n.Data.Global.Button.Cancel;
    }

    ynabToolKit.l10n.localize.addCategoryModal = function () {
      var modal = $('.modal-add-sub-category');
      $(modal).find('input')[0].setAttribute("placeholder", ynabToolKit.l10n.Data.Budget.Table.Placeholder.NewCategory);
      $(modal).find('.button-primary').contents()[0].textContent = ynabToolKit.l10n.Data.Global.Button.Ok;
      $(modal).find('.button-cancel').contents()[0].textContent = ynabToolKit.l10n.Data.Global.Button.Cancel;
    }

  } else {
    setTimeout(poll, 250);
  }
})();
