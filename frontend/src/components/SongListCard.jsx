const SongListCard = () => {
  return (
    <div class="flex cursor-pointer border-b px-2 py-3 hover:shadow-md ">
      <img
        class="h-10 w-10 rounded-lg object-cover"
        alt="User avatar"
        src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
      />
      <div class="flex w-full flex-col px-2">
        <span class="pt-1 text-sm font-semibold capitalize text-red-500">
          I think I need a sunrise, I'm tired of the sunset
        </span>
        <span class="text-xs font-medium uppercase text-gray-500 ">
          -"Boston," Augustana
        </span>
      </div>
    </div>
  );
};

export default SongListCard;
