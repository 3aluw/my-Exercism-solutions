"""Functions to manage a users shopping cart items."""


def add_item(current_cart, items_to_add):
    """Add items to shopping cart.

    :param current_cart: dict - the current shopping cart.
    :param items_to_add: iterable - items to add to the cart.
    :return: dict - the updated user cart dictionary.
    """
    for item in items_to_add:
     item_in_cart = current_cart.get(item)
     if item_in_cart == None:
        current_cart.setdefault(item,1)
     else:
        current_cart[item] +=  1 
    return current_cart





def read_notes(notes):
    """Create user cart from an iterable notes entry.

    :param notes: iterable of items to add to cart.
    :return: dict - a user shopping cart dictionary.
    """
    cart = {}
    for note in notes:
        cart.setdefault(note,1)
    return cart


def update_recipes(ideas, recipe_updates):
    """Update the recipe ideas dictionary.

    :param ideas: dict - The "recipe ideas" dict.
    :param recipe_updates: iterable -  with updates for the ideas section.
    :return: dict - updated "recipe ideas" dict.
    """
    for new_recipe_tuple in recipe_updates:
       ideas[new_recipe_tuple[0]] = new_recipe_tuple[1] 
    return ideas
    
def sort_entries(cart):
    """Sort a users shopping cart in alphabetically order.

    :param cart: dict - a users shopping cart dictionary.
    :return: dict - users shopping cart sorted in alphabetical order.
    """
    return dict(sorted(cart.items()))


def send_to_store(cart, aisle_mapping):
    """Combine users order to aisle and refrigeration information.

    :param cart: dict - users shopping cart dictionary.
    :param aisle_mapping: dict - aisle and refrigeration information dictionary.
    :return: dict - fulfillment dictionary ready to send to store.
    """
    cart_mapped ={}
    for item in cart.keys():
        item_in_mapping = aisle_mapping[item]
        cart_mapped[item] = [cart[item], *item_in_mapping]
    return dict(sorted(cart_mapped.items(), reverse=True))


def update_store_inventory(fulfillment_cart, store_inventory):
    """Update store inventory levels with user order.

    :param fulfillment cart: dict - fulfillment cart to send to store.
    :param store_inventory: dict - store available inventory
    :return: dict - store_inventory updated.
    """
    for item in fulfillment_cart.keys():
     stock_qty = store_inventory[item][0]  # alias for readability
     stock_qty -= fulfillment_cart[item][0]

     if stock_qty < 1:
        store_inventory[item][0] = 'Out of Stock'
     else:
        store_inventory[item][0] = stock_qty

    return store_inventory
