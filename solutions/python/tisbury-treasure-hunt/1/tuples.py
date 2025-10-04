"""Functions to help Azara and Rui locate pirate treasure."""


def get_coordinate(record):
    """Return coordinate value from a tuple containing the treasure name, and treasure       coordinate.

    :param record: tuple - with a (treasure, coordinate) pair.
    :return: str - the extracted map coordinate.
    """
    return record[1]


def convert_coordinate(coordinate):
    """Split the given coordinate into tuple containing its individual components.

    :param coordinate: str - a string map coordinate
    :return: tuple - the string coordinate split into its individual components.
    """
    formated_coordinate = tuple(coordinate)
    return formated_coordinate


def compare_records(azara_record, rui_record):
    """Compare two record types and determine if their coordinates match.

    :param azara_record: tuple - a (treasure, coordinate) pair.
    :param rui_record: tuple - a (location, tuple(coordinate_1, coordinate_2), quadrant)     trio.
    :return: bool - do the coordinates match?
    """
    first_coordinate = azara_record[1]
    seconde_coordinate = rui_record[1][0] + rui_record[1][1]
    return first_coordinate == seconde_coordinate


def create_record(azara_record, rui_record):
    """Combine the two record types (if possible) and create a combined record group.

    :param azara_record: tuple - a (treasure, coordinate) pair.
    :param rui_record: tuple - a (location, coordinate, quadrant) trio.
    :return: tuple or str - the combined record (if compatible), or the string "not a        match" (if incompatible).
    """
    combined_tuple = azara_record + rui_record
    is_cordinate_matched = compare_records(azara_record,rui_record)
    return combined_tuple if is_cordinate_matched else "not a match"


def clean_up(combined_record_group):
    """Clean up a combined record group into a multi-line string of single records.

    :param combined_record_group: tuple - everything from both participants.
    :return: str - everything "cleaned", excess coordinates and information are removed.

    The return statement should be a multi-lined string with items separated by newlines.

    (see HINTS.md for an example).
    """
    report = ""
    for record in combined_record_group:
        new_tuple = tuple([record[0],record[2],record[3],record[4]]) 
        report += f"{new_tuple}\n"

    return report 
