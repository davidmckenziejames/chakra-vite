<MenuList minW="unset" mt="10px" p="0" py="10px" size="md">
              {menuItems.map((item, index) =>
                item.divider ? (
                  <MenuDivider key={index} />
                ) : (
                  <MenuItem
                    minW="130px"
                    pl="15px"
                    pr="10px"
                    py="5px"
                    as="a"
                    href={item.href}
                    key={index}
                  >
                    {item.text}
                  </MenuItem>
                )
              )}
            </MenuList>